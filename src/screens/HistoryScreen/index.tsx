import React, {useEffect, useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {AppLayout} from '../../components/AppLayout';
import {Divider} from '../../components/Divider';
import {ListItem} from '../../components/ListItem';
import {storage} from '../../utils/storage';
import {FavIcon} from '../../components/Icons/index';
import {historyScreenStyles} from './styles';

export const HistoryScreen = () => {
  const [jokes, setJokes] = useState([]);
  const [jokesHistory, setJokesHistory] = useState({});

  useEffect(() => {
    const jokesHistoryItem = async () => {
      const jokesHistoryFromStorage = await storage.getItem('jokesHistory');
      const jokesHistory = JSON.parse(jokesHistoryFromStorage || '[]');
      setJokes(jokesHistory);
    };
    jokesHistoryItem();
  }, []);

  // const onToggle = (joke: any) => {
  //   const updatedJokes = jokesHistory.map(j => {
  //     if (j.joke === joke) {
  //       return {joke, liked: !j.liked};
  //     } else {
  //       return j;
  //     }
  //   });

  //   setJokesHistory(updatedJokes);
  //   storage.setItem('jokesHistory', updatedJokes);
  // };

  return (
    <AppLayout title="History">
      <ScrollView>
        {!jokes.length && <Text>Empty list</Text>}
        {jokes.map(joke => (
          <ListItem
            joke={joke}
            onPress={() => console.log()}
            icon={<FavIcon width={48} height={48} />}
          />
        ))}
      </ScrollView>
      <Divider style={historyScreenStyles.divider} />
    </AppLayout>
  );
};
