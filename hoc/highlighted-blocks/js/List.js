'use strict';

const VideoWithPopularity = withPopularity(Video);
const ArticleWithPopularity = withPopularity(Article);

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoWithPopularity {...item} />
                );

            case 'article':
                return (
                    <ArticleWithPopularity {...item} />
                );
        }
    });
};
