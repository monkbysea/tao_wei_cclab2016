//
//  Particle.hpp
//  opticalflow_particles
//
//  Created by TAO WEI on 11/7/16.
//
//

#pragma once

#include "ofMain.h"

class particle
{
public:
    ofVec2f pos;
    ofVec2f vel;
    ofVec2f frc;   // frc is also know as acceleration (newton says "f=ma")
    
    unsigned int bitFlagW;
    unsigned int bitFlagH;
    
    particle();
    virtual ~particle(){};
    
    void resetForce();
    void addForce(float x, float y);
    void addRepulsionForce(float x, float y, float radius, float scale);
    void addAttractionForce(float x, float y, float radius, float scale);
    void addRepulsionForce(particle &p, float radius, float scale);
    void addAttractionForce(particle &p, float radius, float scale);
    
    void addDampingForce();
    
    void setInitialCondition(float px, float py, float vx, float vy);
    void update();
    void draw();
    
    void bounceOffWalls();
    void wrapAroundWalls();
    
    float damping;
    
protected:
private:
};
