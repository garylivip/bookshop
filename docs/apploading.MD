# 1. index.html:

index.html  (npm start, cds watch 都会直接跳到 fiori lanchpad, 也就是index.html内容。)

vs

fiori-apps.html 则会默认打开 http://localhost:4004/  ， 这估计是CDS 或者其它的引导程序   默认打开index.html 的缘故

# 2. models.js:

models.js under model can not be deleted => it serves for this.setModel(models.createDeviceModel(), "device");


# 3. formatter
从fiori launchpad 进入 app, 找不到 formater, 估计是fiori launchpad 的配置有些问题；
自己写的formater 和  Property Formatting using data type 都有问题
不止一处出现这个问题，暂时搁置，先做优先级高的练习