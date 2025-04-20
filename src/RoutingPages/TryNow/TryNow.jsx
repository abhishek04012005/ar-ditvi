import React from 'react'
import './TryNow.css'
import { Grid } from '@mui/material'
import Heading from '../../structure/Heading/Heading'
import Container from '../../structure/Container/Container'
import QRAlphabets from '../../assets/QR/qralphabets.svg'
import ARLoaderImage from '../../assets/arloading.svg'
import AlphabetsTryNowImage from '../../assets/ARTryNowImage/alphabets-try-now.svg'

const TryNow = () => {
    return (
        <div className="trynow">
            <Heading title="Try Now" />
            <div className="trynow-inner">
                <Container>
                    <div className="trynow-content">
                        <Grid
                            container
                            spacing={{ xs: 5, md: 3 }}
                        >
                            <Grid size={{ xs: 12, md: 4 }}>
                                <div className="trynow-step">
                                    <div className="trynow-step-circle">
                                        <h1>1</h1>
                                    </div>
                                    <div className="trynow-step-text">
                                        <p>SCAN ME</p>
                                    </div>

                                    <div className="trynow-step-image">
                                        <img src={QRAlphabets} alt="" />
                                    </div>
                                </div>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <div className="trynow-step">
                                    <div className="trynow-step-circle">
                                        <h1>2</h1>
                                    </div>
                                    <div className="trynow-step-text">
                                        <p>Wait for 100% Completion</p>
                                    </div>

                                    <div className="trynow-step-image">
                                    <img src={ARLoaderImage} alt="" />
                                    </div>
                                </div>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <div className="trynow-step">
                                    <div className="trynow-step-circle">
                                        <h1>3</h1>
                                    </div>
                                    <div className="trynow-step-text">
                                        <p>Point The Camera on this image</p>
                                    </div>

                                    <div className="trynow-step-image">
                                    <img src={AlphabetsTryNowImage} alt="" />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default TryNow