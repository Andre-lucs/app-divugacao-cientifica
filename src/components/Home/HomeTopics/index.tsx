import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import HomeTopic from '@/src/components/Home/components/HomeTopic';

interface Topic {
  icon: ImageSourcePropType;
  path: string;
  title: string;
  color: string;
}

const HomeTopics = () => {
  const InsightIcon = require('@/assets/images/insight_icon.png');
  const ArticleIcon = require('@/assets/images/article_icon.png');
  const LightIcon = require('@/assets/images/light_icon.png');
  const CertificateIcon = require('@/assets/images/certificate_icon.png');

  const topics: Topic[] = [
    { icon: InsightIcon, path: 'events', title: 'Eventos', color: '#8D24FA' },
    { icon: LightIcon, path: '', title: 'Hackathon', color: '#14AAFF' },
    { icon: ArticleIcon, path: '', title: 'Artigos', color: '#FFCC19' },
    { icon: CertificateIcon, path: '', title: 'Minicursos', color: '#F5578C' },
  ];

  return (
    <View style={styles.HomeTopicContainer}>
      {topics.map((item) => (
        <HomeTopic
          key={item.title}
          icon={item.icon}
          path={item.path}
          title={item.title}
          color={item.color}
        />
      ))}
    </View>
  );
};

export default HomeTopics;

const styles = StyleSheet.create({
  HomeTopicContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-around',
    width: '100%',
    gap: 10
  },
});
