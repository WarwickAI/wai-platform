import React, { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import * as queries from '../graphql/queries';

function TestLambda() {
  const [text, setText] = useState('waiting');

  useEffect(() => {
    API.graphql({ query: queries.echo, variables: { msg: 'Hello there' } }).then((response) =>
      setText(response.data.echo)
    );
  }, []);

  const tryItout = async (e) => {
    e.preventDefault();
    const response = await API.graphql({
      query: queries.echo,
      variables: { msg: e.target.theText.value }
    });
    setText(response.data.echo);
  };

  return (
    <div>
      <h3>Test Lambda Function</h3>
      <form onSubmit={tryItout}>
        <input name="theText" type="text" />
        <input type="submit" />
      </form>
      <div>{text}</div>
    </div>
  );
}

export default TestLambda;
