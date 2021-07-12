import React from 'react'

export default function ClientCommentItem(props) {


const {image, name, identity, comment} = props;


    return (
        <div className="Clients-Comment">

                
                

                <div className="image"> <img src={`${window.location.origin}/kowshik.shikderf/Images/${image}`} alt="" />  </div>
                <div className="Client-name"> <p className="name"> {name} </p> <p className="identity"> {identity} </p>  </div>

                <div className="comment">
                    <p>
                        <div className="quote quote-left"> <i class="fas fa-quote-left"></i> </div>
                            {comment}
                        <div className="quote quote-right"> <i class="fas fa-quote-right"></i> </div>
                    </p>
                </div>
        </div>
    )
}
