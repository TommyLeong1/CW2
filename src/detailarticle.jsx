
import React from 'react';
import articles from '../data/articles.json';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';

function DetailArticle(props) {
	var { id } = useParams();
	const navigate = useNavigate();
  var match=0; // set matching flag
for( var article of articles){ 
  if (article.id==id) {
   match=1
			return (
				<>
          <h1 style={{ color: 'red' }}> Welcome to Blog Dashboard</h1>   
					<h2>{article.title}</h2>
					<p style={{ color: 'green' }}>{article.fullText}</p>
          <p style={{ color: 'cyan' }}>{article.description}</p>
					<Button
						type="primary"
						icon={<RollbackOutlined />}
						onClick={() => navigate(-1)}
					/>
				</>
			);
    break
		} 
  ;
	}
  if(articles.length==0||match==0)
   {
			return (
				<>
					<p>Nothing Found</p>{' '}
					<Button
						type="primary"
						icon={<RollbackOutlined />}
						onClick={() => navigate(-1)}
					/>
				</>
			);
			}
}
export default DetailArticle;



