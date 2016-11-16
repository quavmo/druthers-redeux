import { curry } from 'ramda';
import { connect } from 'react-redux'
import React, { Component, createElement, DOM } from 'react';
import Title from './Title';
import AbstractScreen from '../../components/AbstractScreen';
import Finalize from './Finalize';
import CandidateSet from '../../components/CandidateSet';
import DataService from '../../core/services/DataService';
import NewMemberForm from './NewMemberForm';
import * as mapDispatchToProps from '../../core/actions';
import s from '../styles.css';
const el = createElement;
const { div } = DOM;

class Docket extends Component {
	render() {
    const { 
      updateTitle,
      addMember,
      finalizeDocket,
      currentDocket
    } = this.props;
    const { members, final, title, id } = currentDocket;
    const docket = currentDocket;
    
    return div(
			{className: s.docket},
			el(Title, {text: title, updateTitle}),
			el(CandidateSet, {members}),
      final ? '' : el(NewMemberForm, {addMember}),
			el(Finalize, {finalizeDocket, docket})
		);
  }
}

export default connect(s => s, mapDispatchToProps)(Docket)