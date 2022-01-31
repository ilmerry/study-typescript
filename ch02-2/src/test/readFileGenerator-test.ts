import { readFileGenerator } from "../fileApi";

for(let value of readFileGenerator('data/fake-1.csv')){
    console.log('<line>', value, '</line>')
    break
}