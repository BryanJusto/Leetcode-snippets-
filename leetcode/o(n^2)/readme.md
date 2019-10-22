In this snippet of code we search the length of a string to find a 'jewel'
the jewel could be a string like aAABBBBB with the actual jewel being 'aA' so
in this scenario we would return 3 since a A and A are all considered jewels.
This could be made faster with a hashmap if we set the key to be 'aA' and it
would reduce to an o(n) algorithm but I didn't have time and will most likely come
back to this problem again  