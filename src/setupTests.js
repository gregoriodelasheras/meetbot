import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme to use the adapter for testing with Jest.
configure({ adapter: new Adapter() });
