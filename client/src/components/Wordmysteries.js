import React, { Component } from 'react';
import { render } from "react-dom";
import ImageGallery from 'react-image-gallery';
import Pagination from 'react-paginating';
import ModalImage from 'react-modal-image';
import './Products.css';
import PostForm from './PostForm';
import AllPost from './AllPost';




const fruits = [
    ['http://localhost:4000/image/e988ea386f5112016b829c24dd14a206.jpg',
  'http://localhost:4000/image/a0be24566821a96a1717b0781fbc6453.jpg',
'http://localhost:4000/image/e1265cc925a4659c952d477e76f14a2c.jpg',

'http://localhost:4000/image/bea5980e7cf2451e00e19f2c3ebf6468.jpg'
],
[
  'http://localhost:4000/image/4fe4a9bd63e8c5022c8fcdbe72eb9b14.jpg',
  'http://localhost:4000/image/4fe4a9bd63e8c5022c8fcdbe72eb9b14.jpg',

  'http://localhost:4000/image/4fe4a9bd63e8c5022c8fcdbe72eb9b14.jpg',
  'http://localhost:4000/image/4fe4a9bd63e8c5022c8fcdbe72eb9b14.jpg'
]
  ];

  const limit = 2;
  const pageCount = 4;
  const numberOfItems = 4;
  const total = fruits.length * limit;



class Wordmysteries extends Component {

constructor() {
      super();
      this.state = {
        currentPage: 1,
        title: "React simple CRUD",
        act: 0,
        index: '',
        datas: []
      };
    }

    ComponentDidmount(){
      this.refs.name.focus();
    }

    fSubmit = (e) =>{
      e.preventDefault();
      console.log('try');

      let datas = this.state.datas;
      let name = this.refs.name.value;
      let comment = this.refs.comment.value;

      if(this.state.act === 0){ //new
        let data = {
          name, comment
        }
        datas.push(data);
      }else{                    // update
        let index = this.state.index;
        datas[index].name = name;
        datas[index].comment = comment;
      }

      this.setState({
      datas: datas,
      act: 0
      });

      this.refs.myForm.reset();
      this.refs.name.focus();
    }

    fRemove = (i) => {
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas
      });

      this.refs.myForm.reset();
      this.refs.name.focus();
    }

    fEdit = (i) => {
      let data = this.state.datas[i];
      this.refs.name.value = data.name;
      this.refs.comment.value = data.comment;

      this.setState({
        act: 1,
        index: i
      });

      this.refs.name.focus();
    }

    handlePageChange = page => {
      this.setState({
        currentPage: page
      });
    };

    render() {

      const style5 = {
        width: "95%",
        margin: "auto",
        height: "759px"
        // backgroundColor: "yellow"
      }

      const style3 = {
       marginBottom: "2%",

     };

    const imagery = {
      maxWidth: "60%",
      marginTop: "1%",
      // backgroundColor: "blue",
      float: "left"
    }

    const posters = {
      maxWidth: "40%",
      width: "55%",
      float: "left",
      marginTop: "1%",
      // backgroundColor: "red"
    }


    const imagery2 = {
      color: "black",
      height: "15%",
      width: "100%",
      backgroundColor: "grey",
      border: "5%"
    }

    const { currentPage } = this.state;
    let datas = this.state.datas;
    return (
      <div style={style5}>
      <br/> <br/> <br/> 

      <h1 style= {imagery2}>Let the fun Begin...</h1>
      <div style={imagery}>
      {fruits[currentPage - 1].map(item =>

       <div className="w3-row-padding w3-col s6" style={style3}>
         <ModalImage
         key={item}
          small={item}
          large={item}
          alt="Art"
          className="w3-round-large"
          />
          </div>)}

                  <Pagination
                    total={total}
                    limit={limit}
                    pageCount={pageCount}
                    currentPage={currentPage}
                  >
                    {({
                      pages,
                      currentPage,
                      hasNextPage,
                      hasPreviousPage,
                      previousPage,
                      nextPage,
                      totalPages,
                      getPageItemProps
                    }) => (
                      <div>
                        <button
                          {...getPageItemProps({
                            pageValue: 1,
                            onPageChange: this.handlePageChange
                          })}
                        >
                          first

                        </button>

                        {hasPreviousPage && (
                          <button
                            {...getPageItemProps({
                              pageValue: previousPage,
                              onPageChange: this.handlePageChange
                            })}
                          >
                            {'<'}
                          </button>
                        )}

                        {pages.map(page => {
                          let activePage = null;
                          if (currentPage === page) {
                            activePage = { backgroundColor: 'blue' };
                          }
                          return (
                            <button
                              key={page}
                              style={activePage}
                              {...getPageItemProps({
                                pageValue: page,
                                onPageChange: this.handlePageChange
                              })}
                            >
                              {page}
                            </button>
                          );
                        })}

                        {hasNextPage && (
                          <button
                            {...getPageItemProps({
                              pageValue: nextPage,
                              onPageChange: this.handlePageChange
                            })}
                          >
                            {'>'}
                          </button>
                        )}

                        <button
                          {...getPageItemProps({
                            pageValue: totalPages,
                            onPageChange: this.handlePageChange
                          })}
                        >
                          last
                        </button>
                      </div>
                    )}
                  </Pagination>
          </div>

            <div className="commentpost" style={posters}>
                    
                    <PostForm />
                    <AllPost />

            </div>





      </div>
    );
  }
}

export default Wordmysteries;
