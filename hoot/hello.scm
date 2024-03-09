(define-foreign document-body
  "document" "body"
  ;; Parameters: none
  ;; Result: an external reference which may be null
  -> (ref null extern))

(define-foreign make-text-node
  "document" "createTextNode"
  ;; Parameters: a string
  ;; Result: an external reference which may be null
  (ref string) -> (ref null extern))

(define-foreign append-child!
  "element" "appendChild"
  ;; Parameters: two external references which may be null
  ;; Result: an external reference which may be null
  (ref null extern) (ref null extern) -> (ref null extern))

(append-child! (document-body) (make-text-node "Hello, world!"))
