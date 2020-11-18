import { FunctionComponent } from 'react';
import { GetPackages } from '../Hooks/PackageHook';

type Message = (msg: string) => any;

interface IPackageMessage{
    children: Message;
}

export const PackageFunctionComponent: FunctionComponent<IPackageMessage> = ({
  children,
}) => {
  const message: string = GetPackages();

  return children(message);
};
