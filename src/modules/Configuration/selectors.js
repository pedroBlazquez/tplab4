import { createSelector } from 'reselect';

export const getSiteMap = (state) => (state.Modules.Configuration.siteMap);

export const getSiteMapLinks = createSelector(
  [getSiteMap],
  (sm) => sm.links
);