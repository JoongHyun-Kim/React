import React, { Component } from 'react';
class Subject extends Subject {
    render() {
        return (
         <header>
             <h1>{this.props.title}</h1>
             {this.props.sub}
         </header>
        );
    }
}

export default Subject;