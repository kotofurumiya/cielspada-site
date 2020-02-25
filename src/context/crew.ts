import React from 'react';

export type CrewInfo = {
  readonly avgRank: number;
  readonly isRecruiting: boolean;
  readonly requiredRank: number;
}

export const CrewContext = React.createContext<CrewInfo | undefined>(undefined);
