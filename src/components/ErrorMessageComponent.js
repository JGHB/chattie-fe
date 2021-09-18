import React from 'react';

// component that contains an error message if the user makes any unintended actions
const ErrorMessageComponent = (props) =>
<div class="alert alert-danger" role="alert">
    {props.errorMsg}
</div>

export default ErrorMessageComponent;