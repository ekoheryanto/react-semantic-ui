import React, { Component } from 'react';
import"semantic-ui-css/semantic.min.css";
import {Grid, Button, Container, Divider, Flag} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
    <div>
    <Container textAlign="justified">
    <p>There are two types of intents:
    Explicit intents specify which application will satisfy the intent, by supplying either the target app's package name or a fully-qualified component class name. You'll typically use an explicit intent to start a component in your own app, because you know the class name of the activity or service you want to start. For example, you might start a new activity within your app in response to a user action, or start a service to download a file in the background.
    Implicit intents do not name a specific component, but instead declare a general action to perform, which allows a component from another app to handle it. For example, if you want to show the user a location on a map, you can use an implicit intent to request that another capable app show a specified location on a map.
    Figure 1 shows how an intent is used when starting an activity When the Intent object names a specific activity component explicitly, the system immediately starts that component.
    </p>
    </Container>
    <br/>
    <Divider horizontal>Pembatas vertical maupun horizontal</Divider>
    <Grid container columns={3}>
    <Grid.Column>
    <Button primary>Kirim sekarang</Button>
    <Button secondary>Batal Kirim</Button>
    <br/><br/>
    <Button basic color="olive" content="Login"/>
    <Button basic color="green" content="Daftar"/>
    </Grid.Column>
    <Grid.Column>
    <Flag name="id"/>
    <Flag name="ps"/>
    <Flag name="tr"/>
    </Grid.Column>
    <Grid.Column>C</Grid.Column>
    </Grid>
    </div>
    );
  }
}

export default App;
