import React from 'react';

export default function Alert({alertObj}) {
  return (

    alertObj && <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {alertObj.value}<strong> - {alertObj.title}</strong>
        </div>
    </div>
  );
}
