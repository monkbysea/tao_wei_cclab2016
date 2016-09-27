int buttonPin=2;
int LED1=13;
int LED2=12;
int LED3=11;
int buttonState=0;
void setup() {
  pinMode(LED1,OUTPUT);
  pinMode(LED2,OUTPUT);
  pinMode(LED3,OUTPUT);
//  pinMode(buttonPin,INPUT);
  

}

void loop() {
  buttonState=digitalRead(buttonPin);

  if(buttonState==HIGH){
  digitalWrite(LED1,HIGH);
  delay(200);
  digitalWrite(LED2,HIGH);
  delay(200);
  digitalWrite(LED3,HIGH);
  delay(200);
  }
  else{
    digitalWrite(LED1,LOW);
    delay(300);
    digitalWrite(LED2,LOW);
    delay(300);
    digitalWrite(LED3,LOW);
    delay(300);
  }

}
