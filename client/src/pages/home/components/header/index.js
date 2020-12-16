import React, { useState, useEffect, mome, memo } from 'react';
import { Link } from 'umi';
import { cookie } from 'project-libs';

function Header(props) {
  const [user, setState] = useState(JSON.parse(cookie.get('user')));

  useEffect(() => {
    // console.log(JSON.parse(cookie.get('user')));
  }, []);

  return (
    <div className="header">
      <div className="header_title">遇见次元</div>
      <div className="header_login">
        {user && user.username ? (
          user.username
        ) : (
          <>
            <Link to="/login">登录</Link> | <Link to="/register">注册</Link>
          </>
        )}
      </div>
    </div>
  );
}
export default memo(Header);
