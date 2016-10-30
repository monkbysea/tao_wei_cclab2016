#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofBackground(0);
    ofSetCircleResolution(1000);
    pos=ofPoint(ofGetWidth()/2, ofGetHeight()/2);
    radius=10;
    r=255;
    g=255;
    b=255;
}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    ofSetColor(r,g,b);
    ofDrawCircle(pos, radius);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    if(key==OF_KEY_UP){
        pos.y-=5;
    }
    if(key==OF_KEY_DOWN){
        pos.y+=5;
    }
    if(key==OF_KEY_LEFT){
        pos.x-=5;
    }
    if(key==OF_KEY_RIGHT){
        pos.x+=5;
    }
    if (key=='+') {
        radius+=5;
    }
    if (key=='-'){
        radius-=5;
    }
    if (key=='1'){
        r=ofRandom(255);
        g=ofRandom(255);
        b=ofRandom(255);
    }

    

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){
    pos=ofPoint(ofGetMouseX(),ofGetMouseY(),OF_MOUSE_BUTTON_LEFT);
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
