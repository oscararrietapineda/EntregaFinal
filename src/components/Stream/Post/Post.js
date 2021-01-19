import React from 'react';

function Preguntas(props) {
    return (
      <div>
         <div class="card mb-2">
                    <div class="card-body p-2 p-sm-3">
                        <div class="media forum-item">
                            <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                            <div class="media-body">
                                <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body"> {props.Title} </a></h6>
                                <p class="text-secondary">
                                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                                </p>
                                <p class="text-muted"><a href="javascript:void(0)">bugsysha</a> replied <span class="text-secondary font-weight-bold">14 hours ago</span></p>
                            </div> 
                        </div>
                    </div>
                </div>
        <div className="Preguntas">
        <h4> </h4>
        </div> 
      </div>
    );
  }
  
export default Preguntas;
