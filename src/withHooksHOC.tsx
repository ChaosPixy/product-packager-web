import React from 'react';
import { GetPackages } from './Hooks/PackageHook';

export const withHooksHOC = (Component: any) => {
  return (props: any) => {
    const packages = GetPackages();

    return packages;
  };
};
