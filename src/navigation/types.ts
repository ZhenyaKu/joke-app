export enum AppRouteNames {
  TodayScreen = 'TodayScreen',
  HistoryScreen = 'HistoryScreen',
}

export type AppStackParams = {
  navigate(HistoryScreen: AppRouteNames): void;
  [AppRouteNames.TodayScreen]: undefined;
  [AppRouteNames.HistoryScreen]: undefined;
};
