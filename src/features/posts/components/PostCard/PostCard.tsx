import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, LinearTransition, FadeIn, FadeOut } from 'react-native-reanimated';
import { Post } from '@/src/types';
import { Typography } from '@/src/components';
import { useTheme } from '@/src/hooks/useTheme';
import { strings } from './constants';
import { useThemedStyles } from './styles';
import { BlurView } from 'expo-blur';
import { useHaptics } from '@/src/hooks/useHaptics';

export interface PostCardProps {
    post: Post;
    index?: number;
}

// Component to display individual post details with expandable content
export const PostCard: React.FC<PostCardProps> = memo(({ post, index = 0 }) => {
    const theme = useTheme();
    const themedStyles = useThemedStyles();
    const haptics = useHaptics();

    // Manage expansion state for Read More functionality
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleExpand = () => {
        haptics.medium();
        setIsExpanded(!isExpanded);
    };

    // Splitting logic for truncated view
    const showExpandButton = post.body.length > 100;
    const teaser = showExpandButton ? post.body.substring(0, 100) : post.body;
    const remaining = showExpandButton ? post.body.substring(100) : "";

    return (
        // Smoothly animate card layout changes and entry
        <Animated.View
            entering={FadeInDown.delay(index * 200).duration(800)}
            layout={LinearTransition.springify().damping(25).stiffness(150).mass(1)}
        >
            <BlurView
                intensity={70}
                tint="light"
                style={themedStyles.container}
            >
                <Typography variant="h3" style={themedStyles.title} color={theme.text}>{post.title}</Typography>

                <View>
                    <Typography
                        variant="bodySmall"
                        color={themedStyles.body.color as string}
                        style={themedStyles.body}
                    >
                        {teaser}
                        {!isExpanded && showExpandButton && "..."}
                        {isExpanded && showExpandButton && (
                            <Animated.Text
                                entering={FadeIn.duration(400)}
                                exiting={FadeOut.duration(300)}
                            >
                                {remaining}
                            </Animated.Text>
                        )}
                    </Typography>
                </View>

                {showExpandButton && (
                    <TouchableOpacity
                        onPress={toggleExpand}
                        style={themedStyles.expandButton}
                    >
                        <Typography variant="caption" color={theme.appWhite}>
                            {isExpanded ? strings.showLess : strings.readMore}
                        </Typography>
                    </TouchableOpacity>
                )}
            </BlurView>
        </Animated.View>
    );
});

export default PostCard;
