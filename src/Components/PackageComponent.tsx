import React, { useEffect } from 'react';
import PackageService from '../Services/PackageService';
import { Package } from '../Props/Package'
import { render } from '@testing-library/react';
import { getPackages }  from '../Hooks/PackageHook'

class PackageComponent extends React.Component {

    state: { packages: Package[] };

    constructor(props: { packages: Package[]; }) {
        super(props)
        this.state = {
            packages: props.packages         
        }
    }

    render() { return (<span>{getPackages()}</span>); }
}