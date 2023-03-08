import React, { Component } from "react";
import db from "../../firebase";



class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    const productRef =  db.collection('products').get();
    productRef.then(res => {
      let productList = [];
      res.forEach(snap => {
        productList.push(snap.data());
        console.log(snap);
      })
      this.setState({
        products: productList
      })
    })
  }
  render(){
    return (
        <div className="MainDiv">
          <div class="jumbotron text-center bg-sky">
            <h3>How to show firebase data in reactjs?</h3>
          </div>

          <div>
            <table id="example" class="display table">
              <thead>
              <tr>
                <th>FirstName</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
              </thead>
              <tbody>
              {this.state.products.map(data => {

                return (
                    <tr>
                      <td>{data.style}</td>
                      <td>{data.description}</td>
                      <td>{data.title}</td>
                      <td>{data.price}</td>
                    </tr>

                );

              })}


              </tbody>

            </table>

          </div>
        </div>
    );
  }
}

export default Products;
