import { UserModel } from 'models/login.model';
import { CounterState } from './counter/counter.state';

export interface AppState {
  user: UserModel;
  counter: CounterState;
} 