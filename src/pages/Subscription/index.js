import SignupUser from '../SignupPage/SignupUser';
import SignupMember from '../SignupPage/SignupMember';
import SuscriptionAsso from './SubscriptionAsso';

const Subscription = () => (
  <div className="subscription">
    <div><SignupUser /></div>
    <div><SignupMember /></div>
    <div><SuscriptionAsso /></div>
  </div>
);

export default Subscription;
