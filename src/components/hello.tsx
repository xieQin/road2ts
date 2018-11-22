import * as React from 'react'

export interface HelloProps {
    compiler: string,
    frameork: string
}

export class Hello extends React.Component<HelloProps, {}> {
    render () {
        return <h1>Hello from {this.props.compiler} and {this.props.frameork}</h1>
    }
}