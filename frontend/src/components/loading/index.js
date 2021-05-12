import React from "react";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

function Index() {
  return (
    <Segment style={{ marginTop: "30px" }} vertical>
      <Dimmer active inverted>
        <Loader size="big">Loading data ...</Loader>
      </Dimmer>
    </Segment>
  );
}

export default Index;
