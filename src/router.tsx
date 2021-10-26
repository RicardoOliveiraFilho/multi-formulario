import { BrowserRouter, Route } from 'react-router-dom';

import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';

export function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={FormStep1} />
      <Route path="/passo2" component={FormStep2} />
      <Route path="/passo3" component={FormStep3} />
    </BrowserRouter>
  );
}