import React, {useEffect, useState, Fragment} from 'react';
import {Text, ScrollView} from 'react-native';
import {AppLayout} from '../../components/AppLayout';
import {Divider} from '../../components/Divider';
import {ListItem} from '../../components/ListItem';
import {storage} from '../../utils/storage';
import {historyScreenStyles} from './styles';
import {IJoke} from '../TodayScreen/joke.interface';

export const HistoryScreen = () => {
  const [jokesHistory, setJokesHistory] = useState<IJoke[]>([]);

  useEffect(() => {
    const loadJokesFromStorage = async () => {
      const jokesHistoryFromStorage = await storage.getItem('jokesHistory');
      const jokesHistory = JSON.parse(jokesHistoryFromStorage || '[]');

      setJokesHistory(jokesHistory);
    };

    loadJokesFromStorage();
  }, []);

  const onToggle = ({joke, liked}: IJoke) => {
    const updatedJokes = jokesHistory.map(j => {
      if (j.joke === joke) {
        return {joke, liked: !liked};
      } else {
        return j;
      }
    });

    setJokesHistory(updatedJokes);
    storage.setItem('jokesHistory', JSON.stringify(updatedJokes));
  };

  return (
    <AppLayout title="History">
      <ScrollView>
        {!jokesHistory.length && (
          <Text style={historyScreenStyles.text}>Empty list</Text>
        )}
        {jokesHistory.map((item, index) => (
          <Fragment key={index}>
            <ListItem
              joke={item.joke || ''}
              liked={item.liked}
              onPress={() => onToggle(item)}
            />
          </Fragment>
        ))}
      </ScrollView>
      <Divider style={historyScreenStyles.divider} />
    </AppLayout>
  );
};
