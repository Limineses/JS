#include <cstdlib>
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

void func(double min, double max, double n)
{
	double mid = max - (max - min) * 0.5;

    if(round(mid * mid * mid)  == n)
	{
		cout << mid;
		exit(0);
	}
	else if(mid * mid * mid < n)
	{
		min = mid;
		func(min, max, n);
	}
	else
	{
		max = mid;
		func(min, max, n);
	}
}

int main()
{
	setlocale(LC_ALL, "Russian");
	double n, min, max;
	cin >> n;
	if(n > 0)
	{
		min = -n;
		max = n;
		func(min, max, n);
	}
	else
	{
		min = n;
		max = -n;
		func(min, max, n);
	}
	return 0;
}
