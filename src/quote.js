import React from 'react';

const Quote = (props) => {
	return (
		<div>
			<p id='text' className='quote'>
				{props.quote}
			</p>
			<p id='author' className='author'>
				- {props.author}
			</p>
		</div>
	);
};

export default Quote;
