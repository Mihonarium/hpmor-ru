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
    fetch("https://api.xn--c1asakg.xn--p1ai/html.php?url="+encodeURIComponent(window.location.href))
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
      return <div>Error: {error.message}. Please try reloading the page.</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
		var uri = encodeURIComponent(window.location.href);
      return (<div><Helmet><script src={"https://api.xn--c1asakg.xn--p1ai/js.php?url=" + uri} async></script></Helmet>
          <div dangerouslySetInnerHTML={{__html: result}} ></div></div>
      );
    }
  }
}

function GetBooks() {
	
  
  //const context = useDocusaurusContext();
  return (
    <Layout
      title="Оформить заказ ГПиМРМ"
      permalink="/"
      description="Страница для оформления бесплатного получения трёхтомника «Гарри Поттера и методов рационального мышления»."><ToastContainer />
      <main className="container margin-vert--lg">
		<GetBooksInfo />
		<div className="col col--3"></div>
      </main>
    </Layout>
  );
}

export default GetBooks;
