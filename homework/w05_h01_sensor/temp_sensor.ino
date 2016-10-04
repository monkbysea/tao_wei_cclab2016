int reading;
int LM35Feed=A0;
float tCelsius;
float tFahrenheit;
float tKelvin;
float millivolts;

void setup() {
  // put your setup code here, to run once:
  Serial. begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  reading=analogRead(LM35Feed);
  millivolts=(reading/1024.0)*5000;
  tCelsius=millivolts/10;
  tFahrenheit=(tCelsius*(9/5))+32;
  tKelvin=tCelsius+273.15;

  Serial.print("Celsius °C:");
  Serial.print(tCelsius);
  Serial.print(" ");
  Serial.print("Fahrenheit °F :");
  Serial.print(tFahrenheit);
  Serial.print(" ");
  Serial.print("Kelvin °K:");
  Serial.print(tKelvin);
  Serial.print("\n");
  delay(2000);
     
}
