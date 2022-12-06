import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {getRandomJoke} from '../../api/getRandomJoke';
import {AppLayout} from '../../components/AppLayout';
import {Divider} from '../../components/Divider';
import {FavButton} from '../../components/FavButton';
import {FavFilledIcon, FavIcon} from '../../components/Icons/index';
import {storage} from '../../utils/storage';
import {IJoke} from './joke.interface';
import {todayScreenStyles} from './styles';

const updateJokesList = async (joke: IJoke) => {
  const jokesHistoryFromStorage = await storage.getItem('jokesHistory');
  const jokesHistory = JSON.parse(jokesHistoryFromStorage || '[]');

  jokesHistory.push(joke);
  storage.setItem('jokesHistory', JSON.stringify(jokesHistory));
};

export const TodayScreen = (): JSX.Element => {
  const [todayJoke, setTodayJoke] = useState<IJoke | null>(null);
  const toggleLike = () => {
    if (todayJoke) {
      const updatedJoke = {...todayJoke, liked: !todayJoke.liked};
      setTodayJoke(updatedJoke);
      storage.setItem('joke', JSON.stringify(updatedJoke));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastJokeUpdate = await storage.getItem('lastJokeUpdate');
        const oneDay = 1000 * 60 * 60 * 24;
        const shouldUpdate = lastJokeUpdate
          ? new Date(lastJokeUpdate).getMilliseconds() - Date.now() > oneDay
          : true;
        const jokeFromStorage = await storage.getItem('joke');
        let currentJoke = jokeFromStorage ? JSON.parse(jokeFromStorage) : null;

        if (shouldUpdate || !currentJoke) {
          const data = await getRandomJoke();
          const newJoke = {joke: data.joke, liked: false};
          await storage.setItem('joke', JSON.stringify(newJoke));
          await storage.setItem('lastJokeUpdate', new Date().toString());

          if (currentJoke) await updateJokesList(currentJoke);

          currentJoke = newJoke;
        }

        setTodayJoke(currentJoke);
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <AppLayout title="Today">
      <ScrollView style={todayScreenStyles.container}>
        <>
          {todayJoke && (
            <>
              <Text style={todayScreenStyles.text}>{todayJoke?.joke}</Text>
              <FavButton
                onPress={() => toggleLike()}
                icon={todayJoke?.liked ? <FavFilledIcon /> : <FavIcon />}
              />
            </>
          )}
        </>
      </ScrollView>
      <Divider style={todayScreenStyles.divider} />
    </AppLayout>
  );
};
