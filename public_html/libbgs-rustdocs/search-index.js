var searchIndex = JSON.parse('{\
"libbgs":{"doc":"A library for the manipulation and investigation of …","t":"AAADGDDDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLSIDDDIDDSDIDDDDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLKLLLALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLKLLLLLLLLLLLKLLLLLLLLLLLKLLLLLLLLLLKLLLLLLLLALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLRRRRRFFFFFFFFF","n":["markoff","numbers","util","BloomFilter","Coord","Disjoint","OrbitTester","OrbitTesterResults","add","add_target","associate","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","from","from","from","from","from_chi_fp","from_chi_quad","get_ord","get_sets","init","init","init","init","into","into","into","into","is_member","is_member_prob","new","new","new","results","rot","run","to_chi","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","union","FACTORS","Factor","FactorStream","Factorization","FpNum","GroupElem","QuadField","QuadNum","R","SylowDecomp","SylowDecomposable","SylowElem","SylowParStream","SylowSeqStream","SylowStreamBuilder","add","add","add_assign","add_assign","add_assign","add_assign","add_flag","add_target","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","coords","count_elements_of_order","count_elements_of_order","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","drive_unindexed","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","eq","eq","eq","eq","eq","eq","eq","equivalent","equivalent","equivalent","equivalent","equivalent","factor","find_nonresidue","find_sylow_generator","find_sylow_generator","find_sylow_generator","find_sylow_generator","flags","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from_chi_fp","from_chi_quad","from_powers","generators","get_ord","index","init","init","init","init","init","init","init","init","init","init","int_sqrt","int_sqrt","int_sqrt_either","into","into","into","into","into","into","into","into","into","into","into_iter","into_iter","into_iter","into_par_iter","into_par_iter","inverse","inverse","inverse","is_empty","is_one","is_one","is_one","is_one","is_sylow_generator","is_sylow_generator","is_zero","maximal_divisors","mul","mul","mul_assign","mul_assign","multiply","multiply","multiply","multiply","neg","new","new","new","new","new","next","next","one","one","one","one","order","order","order","pow","pow","prime_powers","rot","size","size","size","size","steinitz","sub","sub_assign","sub_assign","sub_assign","tests","to_chi","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_product","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","value","INCLUDE_ONE","LEQ","NONE","NO_PARABOLIC","NO_UPPER_HALF","test_is_generator_big","test_is_generator_small","find_nonresidue","intpow","intpow_const","legendre","long_multiply","long_multiply_const","standard_affine_shift"],"q":[[0,"libbgs"],[3,"libbgs::markoff"],[72,"libbgs::numbers"],[324,"libbgs::numbers::flags"],[329,"libbgs::numbers::tests"],[331,"libbgs::util"],[338,"core::ops::function"],[339,"core::marker"],[340,"core::marker"],[341,"core::clone"],[342,"core::hash"],[343,"core::iter::traits::iterator"],[344,"alloc::vec"],[345,"either"],[346,"core::result"],[347,"core::any"],[348,"core::fmt"],[349,"rayon::iter::plumbing"],[350,"core::fmt"],[351,"alloc::string"]],"d":["Markoff numbers and structures for manipulating, …","Types and utilities for manipulating numbers in various …","Various number theory utility methods used throughout the …","A Bloom Filter, a probabilistic set. Elements may be added …","A coordinate for a Markoff triple. May represent any of …","A set of disjoint sets of instances of <code>K</code>.","Configures tests to be run on orbits of the Markoff graph …","The results of a successfully run <code>OrbitTester</code>.","Add <code>elem</code> to the Bloom filter.","Adds a target order to the list of orders to be tested.","Merge two disjoint sets; specifically, if <code>one</code> is in $S$ …","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the coordinate $a = \\\\chi + \\\\chi^{-1}$, where $\\\\chi …","Returns the coordinate $a = \\\\chi + \\\\chi^{-1}$, where $\\\\chi …","Returns the order of the map $\\\\text{rot}_a$, that is, …","Returns an <code>Iterator</code> yielding, for each disjoint set, a …","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","True if <code>elem</code> is in the set, lazily confirming the result …","True if <code>elem</code> is in the set. If <code>elem</code> is not in the set, …","Creates a new, empty set of disjoint sets.","Creates a new <code>OrbetTester</code> with default settings and no …","Create a new Bloom filter, with the given size in bits and …","The results of the test, as an iterator yielding each …","Returns an iterator yielding the coordinates $(b, c)$ …","Consume and run this <code>OrbitTester</code>, blocking until …","Returns an element $\\\\chi$ such that, for a coordinate $a$, …","","","","","","","","","","","","","","Modifies <code>self</code> to include elements from <code>other</code>. The false …","The prime factorization of this object.","Types that have a size or order which can be expressed as …","An iterator yielding all of the factors of some number …","A prime power decomposition of a positive integer.","An integer modulo <code>P</code>.","Types that represent the elements of a group. In order for …","The finite field of size <code>P^2</code>. Isomorphic to $\\\\mathbb{Z} / …","An integer modulo <code>P^2</code>. An element $x$ is represented as $x …","The basis element for the numbers outside of the prime …","A decomposition of a finite cyclic group into the direct …","Groups that can be decomposed into a direct sum of cyclic …","An element of the decomposition of a finite cyclic group …","A stream yielding elements of particular orders, as their …","A stream yielding elements of particular orders, as their …","A builder for a stream yielding elements of particular …","","","","","","","Adds a flag to the <code>SylowStreamBuilder</code>, modifying its …","Adds a target order to this <code>SylowStreamBuilder</code>. The …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","The powers on the generators of the Sylow subgroups. In …","Returns the number of elements of a particular order. The …","Returns the number of elements of a particular order. The …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the prime power factor represented by prime number …","Returns a quadratic nonresidue modulo <code>p</code>.","Finds a Sylow generator for the Sylow subgroup of prime …","","","","Bitwise flags for configuring a SylowStreamBuilder. May be …","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the coordinate $a = \\\\chi + \\\\chi^{-1}$, where $\\\\chi …","Returns the coordinate $a = \\\\chi + \\\\chi^{-1}$, where $\\\\chi …","Converts an array of powers on the prime factors into an …","Get the generators for decomposition. The index of each …","Returns the order of the map $\\\\text{rot}_a$, that is, …","","","","","","","","","","","","Calculates this number’s square root, if it is a …","Calculates the square root af in integer modulo <code>P</code>.","Calculates the square root of an integer modulo <code>P</code>, casting …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","Returns the multiplicative inverse of this element. If you …","Returns the multiplicative inverse of this element. If you …","","True if there the factorization represents 1. False …","True if this element is the multiplicative identity; false …","","","","True if the given element is a generator of the Sylow …","True if the given element is a generator of the Sylow …","True if this number is zero; false otherwise.","Returns an <code>Iterator</code> yielding the maximal divisors of the …","","","","","Returns the product of two elements under the group binary …","","","","","Creates a new <code>FactorStream</code>, which will return all of the …","Returns a decomposition for the group. This method may be …","Returns an element of the Sylow decomposition with the …","Returns a new <code>SylowStreamBuilder</code>.","Creates a new factorization from the given prime powers.","","","Gets the unique identity element of this group.","","","","Returns the order of this element, that is, the smallest …","Returns the order of this element, that is, the smallest …","Returns the positive integer represented by this …","Raises this element to the power of <code>n</code>. If you override …","Raises this element to the power of <code>n</code>. If you override …","Gets the prime powers as an array. The first element of …","Returns an iterator yielding the coordinates $(b, c)$ …","Gets the size of the group this element belongs to.","","","","Returns the Steinitz element of $\\\\mathbb{F}_{p^2}$ with …","","","","","Utility methods for use in other tests. These methods …","Returns an element $\\\\chi$ such that, for a coordinate $a$, …","","","","","","","","Returns the element of the original group with the given …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the positive integer represented by this …","Stream is guaranteed to include the identity.","Stream will yield any element less than or equal to a …","Stream will behave with all default options. Identity when …","Stream will yield elements in a parabolic order.","Stream will yield half as many elements as the default. …","True if <code>x</code> is not of order prime power dividing <code>d</code>, but is a …","True if <code>x</code> is of order <code>d</code>, False otherwise. Expensive and …","Returns a quadratic non-residue modulo <code>p</code>. That is, it …","Returns <code>x</code> to the power of <code>n</code>, modulo <code>m</code>.","Returns <code>x</code> to the power of <code>n</code>, modulo <code>m</code>.","Returns the Legendre symbol of <code>a</code> modulo <code>p</code>, i.e., …","Returns the product of <code>a</code> and <code>b</code> modulo <code>m</code>. Otherwise, it is …","Returns the product of <code>a</code> and <code>b</code> modulo <code>m</code>. This function …","Returns a pseudo-random integer modulo <code>q</code>, unique for every …"],"i":[0,0,0,0,0,0,0,0,1,6,8,8,6,21,1,8,6,21,1,1,1,8,6,21,1,8,6,21,1,8,6,21,1,8,6,21,1,16,16,16,8,8,6,21,1,8,6,21,1,1,1,8,6,1,21,16,6,16,1,8,6,21,1,8,6,21,1,8,6,21,1,1,41,0,0,0,0,0,0,0,17,0,0,0,0,0,0,13,17,13,13,13,17,25,25,40,15,14,25,30,31,32,13,34,17,40,15,14,25,30,31,32,13,34,17,14,25,30,31,32,13,17,14,25,30,31,32,13,17,14,43,43,40,15,14,25,30,31,32,13,34,17,40,15,14,25,30,31,32,13,34,17,30,40,15,14,25,30,31,32,13,34,17,14,32,13,13,34,17,17,14,32,13,34,17,32,13,27,14,13,17,0,14,32,13,13,34,17,40,15,14,25,30,31,32,13,13,34,17,17,13,13,32,15,13,32,40,15,14,25,30,31,32,13,34,17,13,17,17,40,15,14,25,30,31,32,13,34,17,40,25,31,25,30,43,43,14,32,43,14,13,17,27,27,17,32,13,13,13,13,43,14,13,17,13,40,15,14,25,32,40,31,43,14,13,17,43,43,14,43,43,32,13,43,14,13,17,17,13,13,13,13,0,13,14,25,30,31,32,13,17,14,13,40,15,14,25,30,31,32,13,34,17,40,15,14,25,30,31,32,13,34,17,40,15,14,25,30,31,32,13,34,17,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"f":[0,0,0,0,0,0,0,0,[[[1,[-1,-2]],-1],2,[],[3,4,5]],[[6,7],2],[[[8,[-1]],-1,-1],2,[9,10,11]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[1,[-1,-2]]],[[1,[-1,-2]]],[],[]],[[-1,-2],2,[],[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,2],[12,2],[12,2],[12,2],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[[[14,[-1,13]],[15,[-1,13]]],16,[]],[[[14,[-1,17]],[15,[-1,17]]],16,[]],[16,7],[[[8,[-1]]],[[0,[18]]],[9,10,11]],[[],12],[[],12],[[],12],[[],12],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[1,[-1,-2]],-1,-3],19,[],[3,4,5],3],[[[1,[-1,-2]],-1],19,[],[3,4,5]],[[],[[8,[-1]]],[9,10,11]],[[],6],[[12,[20,[-1]]],[[1,[-2,-1]]],[3,4,5],[]],[21,[[0,[18]]]],[[16,16,16],[[0,[18]]]],[6,21],[16,[[22,[17,13]]]],[-1,-2,[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[[[1,[-1,-2]],[1,[-1,-2]]],2,[],[3,4,5]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[13,13],13],[[17,17],17],[[13,13],2],[[13,13],2],[[13,7],2],[[17,17],2],[[[25,[-1,-2]],26],[[25,[-1,-2]]],[],[[27,[-1]],28]],[[[25,[-1,-2]],[29,[7]]],[[25,[-1,-2]]],[],[[27,[-1]],28]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[14,[-1,-2]]],[[14,[-1,-2]]],[],[[27,[-1]]]],[[[25,[-1,-2]]],[[25,[-1,-2]]],[],[[27,[-1]]]],[[[30,[-1,-2]]],[[30,[-1,-2]]],[4,5],[[27,[-1]]]],[[[31,[-1,-2]]],[[31,[-1,-2]]],[],[[27,[-1]]]],[32,32],[13,13],[17,17],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],0,[[[29,[7]]],7],[[[29,[7]]],7],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[12,-1,[]],[[[30,[-1,-2]],-3],[],[4,5],[[27,[-1]],4,5],33],[12,2],[12,2],[12,2],[12,2],[12,2],[12,2],[12,2],[12,2],[12,2],[12,2],[[[14,[-1,-2]],[14,[-1,-2]]],19,[],[[27,[-1]]]],[[32,32],19],[[13,13],19],[[13,7],19],[[34,34],19],[[17,7],19],[[17,17],19],[[-1,-2],19,[],[]],[[-1,-2],19,[],[]],[[-1,-2],19,[],[]],[[-1,-2],19,[],[]],[[-1,-2],19,[],[]],[[32,12],7],[[],7],[12,-1,[]],[12,[[14,[-1,-2]]],[],[[27,[-1]]]],[12,13],[12,17],0,[[[14,[-1,-2]],35],36,[],[[27,[-1]]]],[[32,35],36],[[13,35],[[23,[2,37]]]],[[13,35],36],[[34,35],36],[[17,35],36],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[7,13],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[[[2,[7,7]]],17],[[[14,[-1,13]],[15,[-1,13]]],16,[]],[[[14,[-1,17]],[15,[-1,17]]],16,[]],[[32,[29,[7]]],7],[[[15,[-1,-2]]],[[38,[-2]]],[],[[27,[-1]]]],[13,7],[[32,12],[[2,[7,7]]]],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[13,[[39,[13]]]],[7,17],[7,[[22,[17,13]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[25,[-1,-2]]],[[31,[-1,-2]]],[],[[27,[-1]]]],[-1,-2,[],[]],[[[25,[-1,-2]]],[],[4,5],[[27,[-1]],4,5]],[-1,-2,[],[]],[-1,-1,[]],[-1,-1,[]],[[[14,[-1,-2]]],[[14,[-1,-2]]],[],[[27,[-1]],9]],[32,19],[-1,19,[]],[[[14,[-1,-2]]],19,[],[[27,[-1]],9]],[13,19],[17,19],[[-1,[2,[7,7]]],[[39,[-1]]],[]],[[-1,[2,[7,7]]],[[39,[-1]]],[]],[17,19],[[32,7],[[0,[18]]]],[[13,13],13],[[13,13],13],[[13,13],2],[[13,13],2],[[-1,-1],-1,[]],[[[14,[-1,-2]],[14,[-1,-2]]],[[14,[-1,-2]]],[],[[27,[-1]],9]],[[13,13],13],[[17,17],17],[13,13],[[[38,[[2,[7,7]]]],7,19],40],[[],[[15,[-1,-2]]],[],[[27,[-1]]]],[[[29,[7]]],[[14,[-1,-2]]],[],[[27,[-1]]]],[[],[[25,[-1,-2]]],[],[[27,[-1]],28]],[[[29,[[2,[7,7]]]]],32],[40,[[39,[[29,[7]]]]]],[[[31,[-1,-2]]],[[39,[[14,[-1,-2]]]]],[],[[27,[-1]]]],[[],-1,[]],[[],[[14,[-1,-2]]],[],[[27,[-1]],9]],[[],13],[[],17],[-2,32,[],[[41,[-1]]]],[-2,32,[],[[41,[-1]]]],[[[14,[-1,-2]]],32,[],[[27,[-1]]]],[[-1,7],-1,[]],[[-1,7],-1,[]],[32,[[29,[[2,[7,7]]]]]],[[13,16,16],[[0,[18]]]],[[],7],[[],7],[[],7],[[],7],[7,17],[[13,13],13],[[13,7],2],[[13,13],2],[[13,13],2],0,[13,[[22,[17,13]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[14,[-1,-2]],[15,[-1,-2]]],-2,[],[[27,[-1]]]],[-1,42,[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,[[23,[-2]]],[],[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[32,7],0,0,0,0,0,[[-2,[2,[7,7]]],2,[],[[27,[-1]]]],[[-2,7],19,[],[[27,[-1]]]],[[],7],[[7,7],7],[[7,7],7],[7,7],[[7,7],7],[[7,7],7],[[7,7],7]],"c":[],"p":[[3,"BloomFilter",3],[15,"tuple"],[8,"Fn",338],[8,"Send",339],[8,"Sync",339],[3,"OrbitTester",3],[15,"u128"],[3,"Disjoint",3],[8,"Eq",340],[8,"Clone",341],[8,"Hash",342],[15,"usize"],[3,"FpNum",72],[3,"SylowElem",72],[3,"SylowDecomp",72],[6,"Coord",3],[3,"QuadNum",72],[8,"Iterator",343],[15,"bool"],[3,"Vec",344],[3,"OrbitTesterResults",3],[4,"Either",345],[4,"Result",346],[3,"TypeId",347],[3,"SylowStreamBuilder",72],[15,"u8"],[8,"SylowDecomposable",72],[8,"Debug",348],[15,"array"],[3,"SylowParStream",72],[3,"SylowSeqStream",72],[3,"Factorization",72],[8,"UnindexedConsumer",349],[3,"QuadField",72],[3,"Formatter",348],[6,"Result",348],[3,"Error",348],[15,"slice"],[4,"Option",350],[3,"FactorStream",72],[8,"Factor",72],[3,"String",351],[8,"GroupElem",72]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
