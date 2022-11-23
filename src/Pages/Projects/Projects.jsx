import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import { withAuthenticator } from 'aws-amplify-react';

class Projects extends Component {
    render() {
        return (
            <Box>
                Projects
            </Box>
        );
    }
}
export default withAuthenticator(Projects, true);