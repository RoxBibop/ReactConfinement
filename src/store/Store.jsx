import { observable, action } from 'mobx';
import { createContext } from 'react';

const mode = observable.box(false)