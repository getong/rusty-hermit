(function() {var implementors = {};
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?Sized + Pointable&gt; Pointer for Atomic&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Pointable, '_&gt; Pointer for Shared&lt;'_, T&gt;","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Pointer for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Pointer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'s, T&gt; Pointer for SliceVec&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Pointer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Pointer for TinyVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Pointer,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["x86"] = [{"text":"impl Pointer for PAddr","synthetic":false,"types":[]},{"text":"impl Pointer for VAddr","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()