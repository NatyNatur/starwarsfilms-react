// Título de la app, haha

import React, { Component } from 'react';
import PageTitle from '../PageTitle';


class PageTitle extends Component {
    render() {
        return (
            <PageTitle> <div className="tagline">
                    <svg className="tagline__logo" viewBox="0 0 115 50">            
                    </svg>
                  </div>
                  </PageTitle>
        )
    }
}

export default PageTitle;