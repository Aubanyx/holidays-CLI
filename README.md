# holidays-CLI

## Intro
Holidates allows you to get the holidays' names and date of any country and at any given year.

## How to use

It is a very simple tool, you just have to write this command line to get the holidays of a certain country of the current year.

```holidates myCountry```

For example :

```holidates Belgium```

Will return :

```Easter Sunday - 2021-04-04
Easter Monday - 2021-04-05
Labour Day - 2021-05-01
Ascension Day - 2021-05-13
Whit Monday - 2021-05-24
Belgian National Day - 2021-07-21
Assumption Day - 2021-08-15
All Saints' Day - 2021-11-01
Armistice Day - 2021-11-11
Christmas Day - 2021-12-25
```

If you want the holidays of a specific year, simply add it after the country :

```holidates myCountry myYear```

For example :

```holidates Belgium 2004```

Will return:

```Easter Sunday - 2004-04-11
Easter Monday - 2004-04-12
Labour Day - 2004-05-01
Ascension Day - 2004-05-20
Whit Monday - 2004-05-31
Belgian National Day - 2004-07-21
Assumption Day - 2004-08-15
All Saints' Day - 2004-11-01
Armistice Day - 2004-11-11
Christmas Day - 2004-12-25
```

## Sources

How to parse command line arguments :
<https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/>

Documentation on the API date nager :
<https://date.nager.at/Api>

Documentation on the package Country-List :
<https://www.npmjs.com/package/country-list>

Documentation on the package Axios :
<https://www.npmjs.com/package/axios>

Documentation on the package Chalk :
<https://www.npmjs.com/package/chalk>

Documentation on the package Figlet :
<https://www.npmjs.com/package/figlet>

Documentation on the package Ora :
<https://www.npmjs.com/package/ora>
