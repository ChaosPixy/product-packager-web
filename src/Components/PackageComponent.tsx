import React from 'react';
import { Package } from '../Props/Package'
import { render } from '@testing-library/react';
import { withHooksHOC } from '../withHooksHOC';
import { PackageFunctionComponent } from '../FunctionComponents/PackageFunctionComponent'

export class PackageComponent extends React.Component {

    state: { packages: Package[] };

    constructor(props: { packages: Package[]; }) {
        super(props)
        this.state = {
            packages: props.packages         
        }
    }

    render() { return (<PackageFunctionComponent>
                        {(message) => <span>{message}</span>}
                       </PackageFunctionComponent>
        ); }
}