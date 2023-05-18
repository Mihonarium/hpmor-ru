import React from 'react';

import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {Helmet} from "react-helmet";
import CodeBlock from '@theme/CodeBlock';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

class GetBooksInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      result: []
    };
  }

  componentDidMount() {
	  window.toast = toast;
    fetch("https://ctf.xn--c1asakg.xn--p1ai/?url="+encodeURIComponent(window.location.href), {
      credentials: "include",
    })
      .then(res => res.text())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, result } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}. Попробуйте перезагрузить страницу. Если это не помогло, пожалуйста, напишите на hpmor@contact.ms.</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
		var uri = encodeURIComponent(window.location.href);
      return (<div><Helmet></Helmet>
          <div dangerouslySetInnerHTML={{__html: result}} ></div></div>
      );
    }
  }
}

function GetBooks() {
	
  
  //const context = useDocusaurusContext();
  return (
    <Layout
      title="Capture The Books"
      permalink="/"
      description="Возможно, тут выйдет получить бесплатный экземпляр «Гарри Поттера и методов рационального мышления»."><ToastContainer />
      <main className="container margin-vert--lg">
		<GetBooksInfo />
		<div className="col col--3"></div>
      </main>
    </Layout>
  );
}

export default GetBooks;