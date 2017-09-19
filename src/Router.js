import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () =>
  (<Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="INFORMACION GENERAL"
          rightTitle="NUEVO"
          onRight={() => Actions.employeeCreate()}
          initial
        />
        <Scene key="employeeEdit" title="EDITAR INFO GENERAL" component={EmployeeEdit} />
        <Scene key="employeeCreate" title="CREAR INFO GENERAL" component={EmployeeCreate} />
      </Scene>
    </Scene>
  </Router>);

export default RouterComponent;
