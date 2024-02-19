import React from 'react'
import { APP_NAME } from 'configs/AppConfig';
import { Button } from 'antd';

export default function Footer() {
	return (
		<footer className="footer">
			<span>Copyright  &copy;  {`${new Date().getFullYear()}`} <span className="font-weight-semibold">{`${APP_NAME}`}</span> All rights reserved.</span>
		</footer>
	)
}

