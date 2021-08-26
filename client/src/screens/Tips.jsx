
import React from 'react';

export default function Tips(props) {
  const { tips } = props;

  return (
    <div>
      <h3>Tips</h3>
      {tips.map((content) => (
        <p key={content.id}>{content.tip}</p>
      ))}
    </div>
  );
}